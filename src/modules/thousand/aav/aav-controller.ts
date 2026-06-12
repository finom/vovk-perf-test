import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aav")
export default class AavController {
  @operation({
    summary: "Get Aav",
  })
  @get()
  static getAav = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aav",
  })
  @post("{id}")
  static createAav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
