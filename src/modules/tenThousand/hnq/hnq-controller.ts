import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnq")
export default class HnqController {
  @operation({
    summary: "Get Hnq",
  })
  @get()
  static getHnq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnq",
  })
  @post("{id}")
  static createHnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
