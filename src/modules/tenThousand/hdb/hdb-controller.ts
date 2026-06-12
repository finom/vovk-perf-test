import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdb")
export default class HdbController {
  @operation({
    summary: "Get Hdb",
  })
  @get()
  static getHdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdb",
  })
  @post("{id}")
  static createHdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
