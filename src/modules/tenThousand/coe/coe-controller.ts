import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coe")
export default class CoeController {
  @operation({
    summary: "Get Coe",
  })
  @get()
  static getCoe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Coe",
  })
  @post("{id}")
  static createCoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
