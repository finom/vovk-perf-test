import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhd")
export default class BhdController {
  @operation({
    summary: "Get Bhd",
  })
  @get()
  static getBhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhd",
  })
  @post("{id}")
  static createBhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
