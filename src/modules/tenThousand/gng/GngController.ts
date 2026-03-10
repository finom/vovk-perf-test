import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gng")
export default class GngController {
  @operation({
    summary: "Get Gng",
  })
  @get()
  static getGng = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gng",
  })
  @post("{id}")
  static createGng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
