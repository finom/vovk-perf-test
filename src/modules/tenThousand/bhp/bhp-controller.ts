import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhp")
export default class BhpController {
  @operation({
    summary: "Get Bhp",
  })
  @get()
  static getBhp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhp",
  })
  @post("{id}")
  static createBhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
