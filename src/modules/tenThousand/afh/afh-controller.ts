import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afh")
export default class AfhController {
  @operation({
    summary: "Get Afh",
  })
  @get()
  static getAfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afh",
  })
  @post("{id}")
  static createAfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
