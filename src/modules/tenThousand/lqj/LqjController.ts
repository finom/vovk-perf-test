import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqj")
export default class LqjController {
  @operation({
    summary: "Get Lqj",
  })
  @get()
  static getLqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqj",
  })
  @post("{id}")
  static createLqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
