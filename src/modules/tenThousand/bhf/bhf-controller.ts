import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhf")
export default class BhfController {
  @operation({
    summary: "Get Bhf",
  })
  @get()
  static getBhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhf",
  })
  @post("{id}")
  static createBhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
