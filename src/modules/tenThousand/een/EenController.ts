import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("een")
export default class EenController {
  @operation({
    summary: "Get Een",
  })
  @get()
  static getEen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Een",
  })
  @post("{id}")
  static createEen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
