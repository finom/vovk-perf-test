import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hig")
export default class HigController {
  @operation({
    summary: "Get Hig",
  })
  @get()
  static getHig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hig",
  })
  @post("{id}")
  static createHig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
