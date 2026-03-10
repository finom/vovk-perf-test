import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hns")
export default class HnsController {
  @operation({
    summary: "Get Hns",
  })
  @get()
  static getHns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hns",
  })
  @post("{id}")
  static createHns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
