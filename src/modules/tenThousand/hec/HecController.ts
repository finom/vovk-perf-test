import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hec")
export default class HecController {
  @operation({
    summary: "Get Hec",
  })
  @get()
  static getHec = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hec",
  })
  @post("{id}")
  static createHec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
