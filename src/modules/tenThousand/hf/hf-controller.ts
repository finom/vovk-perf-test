import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hf")
export default class HfController {
  @operation({
    summary: "Get Hf",
  })
  @get()
  static getHf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hf",
  })
  @post("{id}")
  static createHf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
