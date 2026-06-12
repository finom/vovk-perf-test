import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eat")
export default class EatController {
  @operation({
    summary: "Get Eat",
  })
  @get()
  static getEat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eat",
  })
  @post("{id}")
  static createEat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
