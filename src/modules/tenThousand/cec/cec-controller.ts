import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cec")
export default class CecController {
  @operation({
    summary: "Get Cec",
  })
  @get()
  static getCec = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cec",
  })
  @post("{id}")
  static createCec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
