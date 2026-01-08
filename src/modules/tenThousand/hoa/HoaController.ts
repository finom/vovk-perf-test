import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoa")
export default class HoaController {
  @operation({
    summary: "Get Hoa",
  })
  @get()
  static getHoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoa",
  })
  @post("{id}")
  static createHoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
