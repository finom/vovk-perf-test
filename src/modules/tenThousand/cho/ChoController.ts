import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cho")
export default class ChoController {
  @operation({
    summary: "Get Cho",
  })
  @get()
  static getCho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cho",
  })
  @post("{id}")
  static createCho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
