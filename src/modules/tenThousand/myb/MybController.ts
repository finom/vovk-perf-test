import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myb")
export default class MybController {
  @operation({
    summary: "Get Myb",
  })
  @get()
  static getMyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myb",
  })
  @post("{id}")
  static createMyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
