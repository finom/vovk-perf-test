import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqu")
export default class HquController {
  @operation({
    summary: "Get Hqu",
  })
  @get()
  static getHqu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqu",
  })
  @post("{id}")
  static createHqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
