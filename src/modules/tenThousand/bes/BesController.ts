import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bes")
export default class BesController {
  @operation({
    summary: "Get Bes",
  })
  @get()
  static getBes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bes",
  })
  @post("{id}")
  static createBes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
