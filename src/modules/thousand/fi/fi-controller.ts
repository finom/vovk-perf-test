import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fi")
export default class FiController {
  @operation({
    summary: "Get Fi",
  })
  @get()
  static getFi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fi",
  })
  @post("{id}")
  static createFi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
