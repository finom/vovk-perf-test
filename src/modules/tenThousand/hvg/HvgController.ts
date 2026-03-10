import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvg")
export default class HvgController {
  @operation({
    summary: "Get Hvg",
  })
  @get()
  static getHvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvg",
  })
  @post("{id}")
  static createHvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
