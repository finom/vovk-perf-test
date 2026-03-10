import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kse")
export default class KseController {
  @operation({
    summary: "Get Kse",
  })
  @get()
  static getKse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kse",
  })
  @post("{id}")
  static createKse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
