import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwo")
export default class HwoController {
  @operation({
    summary: "Get Hwo",
  })
  @get()
  static getHwo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwo",
  })
  @post("{id}")
  static createHwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
