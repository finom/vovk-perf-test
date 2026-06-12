import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hng")
export default class HngController {
  @operation({
    summary: "Get Hng",
  })
  @get()
  static getHng = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hng",
  })
  @post("{id}")
  static createHng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
