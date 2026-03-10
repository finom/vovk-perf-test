import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyz")
export default class HyzController {
  @operation({
    summary: "Get Hyz",
  })
  @get()
  static getHyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyz",
  })
  @post("{id}")
  static createHyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
