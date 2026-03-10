import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvi")
export default class BviController {
  @operation({
    summary: "Get Bvi",
  })
  @get()
  static getBvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvi",
  })
  @post("{id}")
  static createBvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
