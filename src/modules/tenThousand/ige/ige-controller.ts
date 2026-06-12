import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ige")
export default class IgeController {
  @operation({
    summary: "Get Ige",
  })
  @get()
  static getIge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ige",
  })
  @post("{id}")
  static createIge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
