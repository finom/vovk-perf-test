import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhf")
export default class HhfController {
  @operation({
    summary: "Get Hhf",
  })
  @get()
  static getHhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhf",
  })
  @post("{id}")
  static createHhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
