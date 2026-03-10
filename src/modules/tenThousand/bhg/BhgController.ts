import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhg")
export default class BhgController {
  @operation({
    summary: "Get Bhg",
  })
  @get()
  static getBhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhg",
  })
  @post("{id}")
  static createBhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
