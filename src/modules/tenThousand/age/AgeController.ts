import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("age")
export default class AgeController {
  @operation({
    summary: "Get Age",
  })
  @get()
  static getAge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Age",
  })
  @post("{id}")
  static createAge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
