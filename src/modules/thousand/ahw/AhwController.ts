import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahw")
export default class AhwController {
  @operation({
    summary: "Get Ahw",
  })
  @get()
  static getAhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahw",
  })
  @post("{id}")
  static createAhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
