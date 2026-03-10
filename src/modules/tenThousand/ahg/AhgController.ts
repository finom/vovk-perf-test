import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahg")
export default class AhgController {
  @operation({
    summary: "Get Ahg",
  })
  @get()
  static getAhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahg",
  })
  @post("{id}")
  static createAhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
