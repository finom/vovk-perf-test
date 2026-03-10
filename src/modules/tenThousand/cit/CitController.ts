import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cit")
export default class CitController {
  @operation({
    summary: "Get Cit",
  })
  @get()
  static getCit = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cit",
  })
  @post("{id}")
  static createCit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
