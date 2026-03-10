import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrz")
export default class HrzController {
  @operation({
    summary: "Get Hrz",
  })
  @get()
  static getHrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrz",
  })
  @post("{id}")
  static createHrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
