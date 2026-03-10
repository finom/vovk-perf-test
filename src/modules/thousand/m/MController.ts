import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("m")
export default class MController {
  @operation({
    summary: "Get M",
  })
  @get()
  static getM = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create M",
  })
  @post("{id}")
  static createM = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
