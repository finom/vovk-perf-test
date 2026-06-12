import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hal")
export default class HalController {
  @operation({
    summary: "Get Hal",
  })
  @get()
  static getHal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hal",
  })
  @post("{id}")
  static createHal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
