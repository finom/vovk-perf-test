import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhh")
export default class BhhController {
  @operation({
    summary: "Get Bhh",
  })
  @get()
  static getBhh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhh",
  })
  @post("{id}")
  static createBhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
