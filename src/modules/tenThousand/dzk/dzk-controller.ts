import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzk")
export default class DzkController {
  @operation({
    summary: "Get Dzk",
  })
  @get()
  static getDzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzk",
  })
  @post("{id}")
  static createDzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
