import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byb")
export default class BybController {
  @operation({
    summary: "Get Byb",
  })
  @get()
  static getByb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byb",
  })
  @post("{id}")
  static createByb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
