import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnh")
export default class MnhController {
  @operation({
    summary: "Get Mnh",
  })
  @get()
  static getMnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnh",
  })
  @post("{id}")
  static createMnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
