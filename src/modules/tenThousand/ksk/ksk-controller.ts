import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksk")
export default class KskController {
  @operation({
    summary: "Get Ksk",
  })
  @get()
  static getKsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksk",
  })
  @post("{id}")
  static createKsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
