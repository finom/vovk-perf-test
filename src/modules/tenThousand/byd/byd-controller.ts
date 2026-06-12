import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byd")
export default class BydController {
  @operation({
    summary: "Get Byd",
  })
  @get()
  static getByd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byd",
  })
  @post("{id}")
  static createByd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
