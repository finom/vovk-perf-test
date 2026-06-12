import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myq")
export default class MyqController {
  @operation({
    summary: "Get Myq",
  })
  @get()
  static getMyq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myq",
  })
  @post("{id}")
  static createMyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
