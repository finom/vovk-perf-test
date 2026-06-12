import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byp")
export default class BypController {
  @operation({
    summary: "Get Byp",
  })
  @get()
  static getByp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byp",
  })
  @post("{id}")
  static createByp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
