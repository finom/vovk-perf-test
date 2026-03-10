import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyf")
export default class JyfController {
  @operation({
    summary: "Get Jyf",
  })
  @get()
  static getJyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyf",
  })
  @post("{id}")
  static createJyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
