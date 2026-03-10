import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlj")
export default class HljController {
  @operation({
    summary: "Get Hlj",
  })
  @get()
  static getHlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlj",
  })
  @post("{id}")
  static createHlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
