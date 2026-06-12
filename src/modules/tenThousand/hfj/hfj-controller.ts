import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfj")
export default class HfjController {
  @operation({
    summary: "Get Hfj",
  })
  @get()
  static getHfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfj",
  })
  @post("{id}")
  static createHfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
