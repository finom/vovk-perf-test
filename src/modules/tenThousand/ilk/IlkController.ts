import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilk")
export default class IlkController {
  @operation({
    summary: "Get Ilk",
  })
  @get()
  static getIlk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilk",
  })
  @post("{id}")
  static createIlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
