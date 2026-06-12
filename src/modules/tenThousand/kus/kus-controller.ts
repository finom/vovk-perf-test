import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kus")
export default class KusController {
  @operation({
    summary: "Get Kus",
  })
  @get()
  static getKus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kus",
  })
  @post("{id}")
  static createKus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
