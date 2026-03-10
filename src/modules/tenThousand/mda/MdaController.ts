import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mda")
export default class MdaController {
  @operation({
    summary: "Get Mda",
  })
  @get()
  static getMda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mda",
  })
  @post("{id}")
  static createMda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
