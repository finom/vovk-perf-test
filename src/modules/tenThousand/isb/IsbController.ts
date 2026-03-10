import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isb")
export default class IsbController {
  @operation({
    summary: "Get Isb",
  })
  @get()
  static getIsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isb",
  })
  @post("{id}")
  static createIsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
