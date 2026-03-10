import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lve")
export default class LveController {
  @operation({
    summary: "Get Lve",
  })
  @get()
  static getLve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lve",
  })
  @post("{id}")
  static createLve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
