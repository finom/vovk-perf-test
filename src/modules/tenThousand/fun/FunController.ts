import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fun")
export default class FunController {
  @operation({
    summary: "Get Fun",
  })
  @get()
  static getFun = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fun",
  })
  @post("{id}")
  static createFun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
